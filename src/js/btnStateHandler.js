const ACTIVE_BUTTON_CLASS_NAME = "search-reset__btn--active"

export const enableResetButton = (resetBtn) => {
    resetBtn.disabled = false;
    resetBtn.classList.add(ACTIVE_BUTTON_CLASS_NAME);
}

export const disableResetButton = (resetBtn) => {
    resetBtn.disabled = true;
    resetBtn.classList.remove(ACTIVE_BUTTON_CLASS_NAME);
}
