import {hover} from "@testing-library/user-event/dist/hover";

export const customStyles = {

    valueContainer: () => ({
        display: 'grid',
        alignItems: 'center'
    }),
    control: () => ({
        borderRadius: 0,
        color: "white",
        height: 40,
        backgroundColor: 'transparent',
        width: 155,
        display: 'flex',
        borderBottom: '1px solid #000',

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
        backgroundColor: state.isSelected ? 'transparent' : 'transparent',

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
/*

    indicatorsContainer: () => ({

    }),
    indicatorSeparator: () => ({
        backgroundColor: 'transparent',
        display: 'none',
    }),


    input: () => ({
        color: 'transparent',
        margin: '2px',
        paddingBottom: '0px',
        paddingTop: '15px',
        visibility: 'visible',
        webkitFlex: '1 1 auto',
        msFlex: '1 1 auto',
        flex: '1 1 auto',
        display: 'inline-grid',
        gridArea: '1/1/2/3',
        gridTemplateColumns: '0 min-content',
        boxSizing: 'border-box',
    }) ,
    svg: () => ({
        display: 'flex',
    }) ,

    menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',

    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'white' : 'brown',

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
*/


}