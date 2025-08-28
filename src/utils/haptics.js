export function vibrate(duration = 15) {
    try {
        if (typeof navigator !== 'undefined') {
            const anyNav = navigator;
            anyNav.vibrate?.(duration);
        }
    }
    catch {
        // noop
    }
}
