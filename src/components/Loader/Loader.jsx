import { DotSpinner } from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='loader-container'>
        <DotSpinner 
            size={40}
            speed={0.9} 
            color='var(--text-primary)' 
        />
    </div>
  )
}

export default Loader