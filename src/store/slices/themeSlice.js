import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
  }
  return 'dark';
};

const initialTheme = getInitialTheme();

// Immediately apply class on boot
if (typeof document !== 'undefined') {
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', state.mode);
        if (state.mode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    setTheme: (state, action) => {
      const mode = action.payload;
      if (mode === 'dark' || mode === 'light') {
        state.mode = mode;
        if (typeof window !== 'undefined') {
          localStorage.setItem('portfolio-theme', mode);
          if (mode === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
