import { DynamicNavigationMenu } from "@/components/global/DynamicNavigationMenu/DynamicNavigationMenu";
import { categories, wearing } from "@/Static-Data/NavBar";
import React from "react";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ sub: string }>;
}) => {
  const sub = await params;
  const findSub = categories.find(
    (category) =>
      category.name.toLocaleLowerCase() === sub.sub.toLocaleLowerCase()
  );

  return (
    <div className=" flex flex-col container mx-auto">
      <div className=" w-full mt-2  pb-2 flex justify-center items-center">
        <DynamicNavigationMenu items={findSub?.submenu || wearing} />
      </div>
      {children}
    </div>
  );
};

export default layout;
