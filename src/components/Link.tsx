import './Link.css'

const Link = (props: { disabled: boolean; href: any; title: any; }) => {
  const { disabled, href, title } = props;

  return (
    <a className='hover:text-rose-300 ' href={disabled ? '#' : href}>
      <span className='opacity-70'>{title}</span>
    </a>
  );
};

export default Link;
