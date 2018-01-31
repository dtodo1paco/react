export function scrollToTop(activeTabIndex, tabId, tabPanelId) {
    // Mobile devices use an emulator and the scrolling is attached to the entire dialog
    // instead of the tabs-container.
    const emulator = document.getElementById('phone-emulator-demo');
    if (emulator) {
        emulator.scrollTop = 0;
        return;
    }

    const panel = document.getElementById(tabPanelId);
    if (panel) {
        panel.parentNode.scrollTop = 0;
    }
}