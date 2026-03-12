'use client';

import { useEffect } from 'react';

const APPS_FLYER_SCRIPT_ID = 'appsflyer-onelink-smart-script';
const APPS_FLYER_SCRIPT_SRC = 'https://onelinksmartscript.appsflyer.com/onelink-smart-script-latest.js';
const ONE_LINK_URL = 'https://getbulkapp.onelink.me/nR7H';

function ensureAppsFlyerScript() {
    if (typeof document === 'undefined') {
        return;
    }

    if (document.getElementById(APPS_FLYER_SCRIPT_ID)) {
        return;
    }

    const script = document.createElement('script');
    script.id = APPS_FLYER_SCRIPT_ID;
    script.src = APPS_FLYER_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
}

function generateOneLinkClickURL() {
    if (typeof window === 'undefined') {
        return ONE_LINK_URL;
    }

    const smartScript = window.AF_SMART_SCRIPT;
    if (!smartScript || typeof smartScript.generateOneLinkURL !== 'function') {
        return ONE_LINK_URL;
    }

    const mediaSource = { keys: ['pid'], defaultValue: 'any_source' };
    const campaign = { keys: ['c'], defaultValue: 'any_campaign_name' };
    const afSiteId = {
        paramKey: 'af_siteid',
        keys: ['af_siteid'],
        defaultValue: 'any_siteid'
    };
    const afCampaignId = {
        paramKey: 'af_c_id',
        keys: ['af_c_id'],
        defaultValue: 'any_c_id'
    };
    const adSet = { keys: ['af_adset'], defaultValue: 'any_adset_name' };
    const adSetId = {
        paramKey: '{{adset.id}}',
        keys: ['{{adset.id}}'],
        defaultValue: 'any_adset_id'
    };
    const ad = { keys: ['af_ad'], defaultValue: 'any_ad_name' };
    const afAdId = {
        paramKey: 'af_ad_id',
        keys: ['af_ad_id'],
        defaultValue: 'any_ad_id'
    };
    const afSub1 = { keys: ['fbclid'] };
    const customSsUi = { paramKey: 'af_ss_ui', defaultValue: 'true' };

    try {
        const result = smartScript.generateOneLinkURL({
            oneLinkURL: ONE_LINK_URL,
            afParameters: {
                mediaSource,
                campaign,
                afCustom: [afSiteId, afCampaignId, adSetId, afAdId, customSsUi],
                adSet,
                ad,
                afSub1,
                googleClickIdKey: 'af_sub2'
            }
        });

        return result?.clickURL || ONE_LINK_URL;
    } catch (error) {
        console.error('Error generating OneLink URL:', error);
        return ONE_LINK_URL;
    }
}

export function StartFreeTrialLink({ children = 'Start Free Trial', className = '', onClick }) {
    useEffect(() => {
        ensureAppsFlyerScript();
    }, []);

    function handleClick(event) {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }

        event.preventDefault();
        const targetUrl = generateOneLinkClickURL();
        const popup = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (!popup) {
            window.location.assign(targetUrl);
        }
    }

    return (
        <a href={ONE_LINK_URL} target="_blank" rel="noreferrer" onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
