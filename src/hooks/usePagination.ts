export function usePagination() {
  function getCurrentPage() {
    return window.location.pathname;
  }

  function togglePage() {
    if (getCurrentPage() === "/") return "/details";

    return "/";
  }

  function getPageName() {
    if (getCurrentPage() === "/details") return "Detalhes";

    return "Dashboard";
  }

  function getLinkText() {
    if (getCurrentPage() === "/details") return "Dashboard";

    return "Detalhes";
  }

  return { togglePage, getPageName, getLinkText };
}
