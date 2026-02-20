import type { CSSProperties, ReactNode } from 'react';

type FloatingButtonBaseProps = {
  children: ReactNode;
  'aria-label': string;
  title?: string;
  style?: CSSProperties;
};

type FloatingButtonButtonProps = FloatingButtonBaseProps & {
  onClick: () => void;
  href?: never;
  target?: never;
  rel?: never;
};

type FloatingButtonLinkProps = FloatingButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
};

export type FloatingButtonProps = FloatingButtonButtonProps | FloatingButtonLinkProps;

export function FloatingButton(props: FloatingButtonProps) {
  const sharedStyle: CSSProperties = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 50,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    background: 'var(--secondary)',
    color: 'var(--foreground)',
    cursor: 'pointer',
    transition: 'background 150ms, color 150ms',
    textDecoration: 'none',
    ...props.style,
  };

  if ('href' in props) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        aria-label={props['aria-label']}
        title={props.title}
        style={sharedStyle}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      onClick={props.onClick}
      aria-label={props['aria-label']}
      title={props.title}
      style={sharedStyle}
    >
      {props.children}
    </button>
  );
}
