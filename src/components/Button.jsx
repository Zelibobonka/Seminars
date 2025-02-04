import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.8rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 1rem 1.2;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-green-700);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background-color: var(--color-grey-200);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  position: relative;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  transition: background-color 0.2s;

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "medium",
};

export default Button;
