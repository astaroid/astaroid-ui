import SearchBarDropdownMenuItem from "../../lib/component/search-bar-dropdown-menu-item.svelte"

export default {
    title: "Component/Search Bar Dropdown Menu Item",
    component: SearchBarDropdownMenuItem,
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: 'light', value: 'white' },
                { name: 'dark', value: '#303030' },
            ]
        }
    },
    argTypes: {
        onClicked: {
            action: "onClicked",
            description: "The event emitter when a component is clicked"
        },
        theme: {
            type: { required: true, name: "string" },
            description: "The theme of the component",
            defaultValue: "light",
            control: {
                type: "radio",
                options: [ "light", "dark" ]
            }
        },
        searchValue: {
            name: "search value",
            type: { name: "string", required: true },
            description: "The value inputted in the search bar",
            defaultValue: "search",
            control: {
                type: "text"
            }
        },
        searchBy: {
            name: "search by",
            type: { name: "string" },
            description: "The value the search value is filtered with",
            defaultValue: "color",
            control: {
                type: "select",
                options: ["color", "volume", "price", "rarest"]
            }
        }
    }
}

const Template = (args:any) => ({
    Component: SearchBarDropdownMenuItem,
    props: args,
    on: {
        onClicked: args.onClicked
    }
})

export const Container = Template.bind({})

export const DarkContainer = Template.bind({})
DarkContainer.args = {
    theme: "dark"
}
DarkContainer.parameters = {
    backgrounds: {
        default: 'dark'
    }
}