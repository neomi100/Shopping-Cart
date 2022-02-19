
export function NiceBtn({ children, Icon, isLoading, ...restOfProps }) {
  return (
    <button className="cta-btn" {...restOfProps}>
      {isLoading ? 'Loading' :
        <>
          {Icon && <Icon className="btn-icon" />}
          {children}
        </>}
    </button>
  )
}
