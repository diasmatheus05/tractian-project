export function usePagination(pathname: string) {
  function togglePage() {
    if (pathname === "/") return "/details";

    return "/";
  }

  function getPageName() {
    if (pathname === "/details") return "Detalhes";

    return "Dashboard";
  }

  function getLinkText() {
    if (pathname === "/details") return "Dashboard";

    return "Detalhes";
  }

  return { togglePage, getPageName, getLinkText };
}
