import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMobileMenuOpen: false,
    isResumeModalOpen: false,
    activeCertificateModal: null, // Holds certificate object or null
    activeProjectCategory: 'All',
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openResumeModal: (state) => {
      state.isResumeModalOpen = true;
    },
    closeResumeModal: (state) => {
      state.isResumeModalOpen = false;
    },
    openCertificateModal: (state, action) => {
      state.activeCertificateModal = action.payload;
    },
    closeCertificateModal: (state) => {
      state.activeCertificateModal = null;
    },
    setProjectCategory: (state, action) => {
      state.activeProjectCategory = action.payload;
    }
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openResumeModal,
  closeResumeModal,
  openCertificateModal,
  closeCertificateModal,
  setProjectCategory
} = uiSlice.actions;

export default uiSlice.reducer;
