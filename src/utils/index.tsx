import React from 'react';

/**
 * @example
 * const BaseCard = override(View, {
 *   style: {
 *     backgroundColor: 'white',
 *     borderRadius: 8,
 *     overflow: 'hidden'
 *   }
 * });
 *
 * const CardHeader = override(View, {
 *   style: {
 *     backgroundColor: 'blue',
 *     padding: 16,
 *     borderBottomWidth: 1,
 *     borderBottomColor: 'black'
 *   }
 * });
 */
export const override = <Props extends {}>(
  Component: React.ComponentType<Props>,
  defaultProps: Partial<Props>
) => {
  return (props: Props) => <Component {...defaultProps} {...props} />;
};

/**
 *
 * @example
 * const Card = createVariants(BaseCard, {
 *   black: {
 *     style: {
 *       blackgroundColor: 'black'
 *     }
 *   }
 * });
 */
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

/**
 *
 * @example
 * const Card = compose(BaseCard, { Header: CardHeader });
 *
 * <Card>
 *   <Card.Header>
 *     <Text>Header</Text>
 *   </Card.Header>
 * </Card>
 */
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
