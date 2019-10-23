// This file contains the initialization logic
//TFS39911 20180813 RBR - Object created
var iframe = window.frameElement;

iframe.parentElement.style.display = 'flex';
iframe.parentElement.style.flexDirection = 'column';
iframe.parentElement.style.flexGrow = '1';

iframe.style.removeProperty('height');
iframe.style.removeProperty('min-height');
iframe.style.removeProperty('max-height');

iframe.style.flexGrow = '1';
iframe.style.flexShrink = '1';
iframe.style.flexBasis = 'auto';
iframe.style.paddingBottom = '42px';

ReactPage;

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ControlReady", []);