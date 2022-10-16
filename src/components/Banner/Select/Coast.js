
export const Coast = {

    valueContainer: () => ({
        display: 'grid',
        alignItems: 'center'
    }),
    control: () => ({
        borderRadius: 15,
        color: "white",
        height: 40,
        backgroundColor: 'transparent',
        width: 110,
        display: 'flex',
        marginBottom: 5,
    }),
    placeholder: () => ({
        color: '#BCBCBC',
        gridArea: '1/1/1/1',
        marginLeft: '2px',
        boxSizing: 'border-box',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }),
    indicatorSeparator: () => ({
        backgroundColor: 'transparent',
        display: 'none',
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'white',
        backgroundColor: state.isSelected ? '#1c4e1e' : 'black',

    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',

    }),
    singleValue:() => ({
        color:  'hsl(0,0%,100%)',
        gridArea:' 1/1/2/3',
        marginLeft: '2px',
        marginRight: '2px',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        opacity: 1,
        webkitTransition: 'opacity 300ms',
        transition: 'opacity 300ms',
    })


}