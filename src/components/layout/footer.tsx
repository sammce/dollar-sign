function Footer() {
  return (
    <footer className="h-40 flex fixed bottom-0 left-0 w-full justify-center items-center flex-col gap-4 bg-accent/30 dark:border-t dark:border-neutral-700 text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/sammce">@sammce</a>.<br />
        MIT License
      </p>
    </footer>
  );
}

export default Footer;
