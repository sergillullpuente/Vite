import './Link.css'

const Link = (props: { className?: '' | undefined; disabled: boolean; href: any; isExternal: any; title: any; }) => {
  const { className = '', disabled, href, isExternal, title } = props;
  const anchorProps = isExternal ? { target: '_blank', rel: 'noopener' } : {};

  return (
    <a
      className={`
        ${className}
        ${disabled ? 'text-white' : 'text-primary'}
        group relative py-3 leading-tight font-extrabold text-xl transition hover:text-white xl:text-2xl
      `}
      href={disabled ? '#' : href}
      {...anchorProps}
    >
      {disabled ? (
        <span className='transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute text-xs rounded-full -top-2 py-1 left-0 right-0 m-auto w-full text-primary font-semibold'>
          Próximamente
        </span>
      ) : (
        ''
      )}
      <span className={disabled ? 'opacity-70' : ''}>{title}</span>
    </a>
  );
};

export default Link;
