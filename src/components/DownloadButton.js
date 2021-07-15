import React from 'react'
import { browserName } from "react-device-detect";

let link, icon;
let label = "Download";
switch (browserName) {
    case 'Firefox':
        link = 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/'
        icon = '/firefox.svg'
        break;
    case 'Chrome':
    case 'Chrome WebView':
        link = 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd?hl=fr&authuser=0'
        icon = '/chrome.svg'
        break;
    case 'Safari':
        link = '/use-bonjourr#-safari'
        label = 'Use on Safari'
        icon = '/safari.svg'
        break;
    case 'Mobile Safari':
        link = '/use-bonjourr#-bonjourr-on-ios'
        label = 'Use on iOS'
        icon = '/safari.svg'
        break;
    case 'Edge':
        link = 'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid'
        icon = '/edge.svg'
        break;
    default:
        icon = '/logo.png'
        link = 'https://online.bonjourr.fr'
        label = 'Use Bonjourr'
}

export default function downloadButton() {
    return (
        <a href={link} className="button">
            <div className="icon">
                <img src={icon} alt={browserName + ' logo'}/>
            </div>
            <span>{label}</span>
        </a>
    )
}