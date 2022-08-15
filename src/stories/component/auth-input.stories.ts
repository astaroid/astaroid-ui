import AuthInput from "../../lib/component/auth-input.svelte"

export default {
    title: "Component/Auth Input",
    component: AuthInput,
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#181818' },
            ],
        },
    },
    argTypes: {
        onInput: {
            action: "onInput", 
            description: "The event emitter when a value is inputted"
        },
        message: {
            name: "message",
            type: { name: "string", required: true },
            description: "The error message display",
            defaultValue: "Error",
            control: {
                type: "text"
            }
        },
        placeholder: {
            name: "placeholder",
            type: { name: "string" },
            description: "The placeholder of the component",
            control: {
                type: "text"
            }
        },
        error: {
            name: "error",
            defaultValue: false,
            type: { name: "boolean", required: true },
            description: "If true the component input value is wrong",
            control: {
                type: "boolean"
            }
        },
        width: {
            name: "width",
            type: { name: "number", required: true },
            description: "The width of the component",
            control: {
                type: "number"
            },
            defaultValue: 100
        },
        unit: {
            name:"unit",
            type: { name: "string" },
            description: "The unit of width of the component",
            defaultValue: "%",
            control: {
                type: "select",
                options: [ "pt", "mm", "pc", "cm", "in", "%", "px" ]
            }
        },
        type: {
            name:"type",
            type: { name: "string", required: true },
            description: "The type of the input component",
            defaultValue: "text",
            control: {
                type: "select",
                options: [ "text", "password", "email", "search" ]
            }
        },
        theme: {
            name: "theme",
            type: { required: true, name: "string" },
            description: "The theme of the component",
            defaultValue: "light",
            control: {
                type: "radio",
                options: [ "light", "dark" ]
            }
        }
    }
}

const Template  = (args:any) => ({
    Component: AuthInput,
    props: args,
    on: {
        onInput: args.onInput
    }
})

export const InputBox = Template.bind({})
InputBox.args = {
    theme: "light"
}

export const DarkInputBox = Template.bind({})
DarkInputBox.args = {
    theme: "dark"
}
DarkInputBox.parameters = {
    backgrounds: {
        default: 'dark'
    }
}