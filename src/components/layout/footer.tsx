function Footer() {
  return (
    <footer className="h-40 flex fixed bottom-0 left-0 right-0 -z-10 justify-center items-center flex-col gap-4 bg-accent/30 dark:border-t dark:border-neutral-700">
      <p>&copy; {new Date().getFullYear()} Nuritas Ltd. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
