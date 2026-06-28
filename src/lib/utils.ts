import classNames from "classnames";

export function cn(...inputs: Parameters<typeof classNames>) {
  return classNames(inputs);
}
