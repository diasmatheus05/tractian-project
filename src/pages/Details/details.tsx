import { useDataContext } from "../../contexts";
import { LayoutDetails } from "./components";

export function Details() {
  const { getDetailsData } = useDataContext();
  const { type, name, breadcrumb, lists, assetsList, asset } = getDetailsData();

  return (
    <LayoutDetails
      type={type}
      name={name}
      breadcrumb={breadcrumb}
      lists={lists}
      assetsList={assetsList}
      asset={asset}
    />
  );
}
