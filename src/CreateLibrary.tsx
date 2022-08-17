import React, { useState } from "react";
import { useStorybookApi, Story } from "@storybook/api";
import { IconButton } from "@storybook/components";
import AnimaAPI from "./api";
import getPackageJsonFromStory from "./utils/getPackageJsonFromStory";
import getMetadataFromStory from "./utils/getMetadataFromStory";

const createLibraryApi = async (library: any, dependencies: any) => {
  try {
    let dependenciesArray = ["react", "react-dom"];
    const exculdedDependencies: string[] = library?.["excluded_packages"];

    if (library?.code_template_params?.dependencies) {
      const themeDependencies = Object.fromEntries(
        Object.entries(dependencies).filter(
          ([key]) => library.code_template_params.dependencies.includes(key)
        )
      );
      library.code_template_params.dependencies = themeDependencies;
    }
    const filteredDependencies = Object.fromEntries(
      Object.entries(dependencies).filter(
        ([key]) => !exculdedDependencies?.includes(key)
      )
    );

    const packageDependencyArray = Object.keys(filteredDependencies);
    dependenciesArray = dependenciesArray.concat(packageDependencyArray);

    let body = {
      ...library,
      dependencies: dependenciesArray,
      external_dependencies: filteredDependencies,
    };
    AnimaAPI.POST("/widget-library/create", body);
  } catch (error) {
    console.log(error);
  } finally {
    return true;
  }
};

const CreateLibrary = () => {
  const sbApi = useStorybookApi();
  const [isCreatingLibrary, setIsCreatingLibrary] = useState(false);

  return (
    <>
      <IconButton
        active={false}
        title="Create Library"
        onClick={async () => {
          const currentStory = sbApi.getCurrentStoryData() as Story;
          const packageJson = await getPackageJsonFromStory(currentStory);
          const metadata = await getMetadataFromStory(currentStory);

          setIsCreatingLibrary(true);
          await createLibraryApi(metadata, packageJson.dependencies);
          setIsCreatingLibrary(false);
        }}
      >
        {isCreatingLibrary ? (
          <svg
            className="spin"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#999999"
          >
            <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
          </svg>
        ) : (
          <svg
            width="36px"
            height="36px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
          >
            <title>library-solid</title>
            <path d="M12.75,3H5.25A1.15,1.15,0,0,0,4,4V33H14V4A1.15,1.15,0,0,0,12.75,3Z"></path>
            <path d="M33.77,31.09l-6.94-18.3a1,1,0,0,0-1.29-.58L22,13.59V9a1,1,0,0,0-1-1H16V33h6V14.69L28.93,33Z"></path>
            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
          </svg>
        )}
      </IconButton>
    </>
  );
};

export default CreateLibrary;
