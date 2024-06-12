const version = require("../../../package.json").version;

export default function getVersion() {
  let newVersion = version.substring(0, version.lastIndexOf("."));
  console.log(newVersion);
  return newVersion;
}
