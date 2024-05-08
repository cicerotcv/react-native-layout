import React from 'react';

export const override = <Props extends {}>(
  Component: React.ComponentType<Props>,
  defaultProps: Partial<Props>
) => {
  return (props: Props) => <Component {...defaultProps} {...props} />;
};

export const createVariants = <Props extends {}, VariantName extends string>(
  Component: React.ComponentType<Props>,
  variants: Record<VariantName, Partial<Props>>
) => {
  return (
    props: Props & {
      variant: VariantName;
    }
  ) => {
    return <Component {...variants[props.variant]} {...props} />;
  };
};

export const compose = <
  MainComponent extends any,
  ChildComponents extends {
    [key: string]: any;
  },
>(
  Component: MainComponent,
  childComponents: ChildComponents
) => {
  Object.entries(childComponents).forEach(([key, ChildComponent]) => {
    (Component as any)[key] = ChildComponent;
  });

  return Component as MainComponent & ChildComponents;
};
