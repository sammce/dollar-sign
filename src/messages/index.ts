export type Messages = {
  HomePage: {
    hero: {
      title: string;
      rotatingWords: string[];
      buttonText: string;
    };
    textReveal: string;
    macbook: {
      title: string;
      subtitle: {
        top: string;
        bottom: string;
      };
    };
    cards: string[];
    finalCTA: {
      title: string;
      buttonText: string;
    };
  };
};
