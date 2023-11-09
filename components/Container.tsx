// the classname module would concatenante all class into one single string
import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames("mx-auto max-w-[120rem] px-6 sm:px-8 ", className)}
    >
      {children}
    </div>
  );
};

// the classname module would concatenante all class into one single string
// import classNames from "classnames";
// import React from "react";

// type ContainerProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
//   ({ children, className }, _ref) => {
//     return (
//       <div
//         ref={_ref}
//         className={classNames(
//           "mx-auto max-w-[120rem] px-6 sm:px-8 ",
//           className
//         )}
//       >
//         {children}
//       </div>
//     );
//   }
// );
