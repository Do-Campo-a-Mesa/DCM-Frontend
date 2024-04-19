export const useCustomStyles = () => {
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };

  return {
    SmallFooterStyles,
  };
};
