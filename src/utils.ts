const capitalize = (str: string): string => {
    str = str.replace(
        /(^|\/|-)(\S)/g,
        (s) => s.toUpperCase()
      );
    str = str.replace("@", "").replace("/", "").replace("-", "");
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {capitalize} 