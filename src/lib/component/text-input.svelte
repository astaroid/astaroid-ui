<script lang="ts">
    import { createEventDispatcher } from "svelte"
    
    export let theme:"system"|"light"|"dark" = "system"
    export let width:number = 100
    export let message:string
    export let unit:"px"|"mm"|"pt"|"cm"|"pc"|"in"|"%" = "%"
    export let error:boolean = false
    export let placeholder:string = String()
    export let type:"text"|"password"|"search"|"email" = "text"

    const dispatcher = createEventDispatcher()

    let inputValue:string

    const sendValue = () => {
        dispatcher("onInput", { inputValue })
    }
</script>

<div style="width: calc({`${width}${unit} - 40px`})" data-theme={theme}>        
    {#if type == "email"}
        <input data-has-error={error} bind:value={inputValue} on:input={ () => sendValue() } {placeholder} type="email">
    {:else if type == "password"}
        <input data-has-error={error} bind:value={inputValue} on:input={ () => sendValue() } {placeholder} type="password">
    {:else if type == "search"}
        <input data-has-error={error} bind:value={inputValue} on:input={ () => sendValue() } {placeholder} type="search">
    {:else}
        <input data-has-error={error} bind:value={inputValue} on:input={ () => sendValue() } {placeholder} type="text">
    {/if}
    <p>{ error ? message : String() }</p>
</div>
<style lang="less">
    div {
        width: 100%;
        padding: 7px;
        padding-inline: 20px;
        p {  
            width: 100%;
            margin: 0 0 0 0;
            padding: 0 0 0 0;
            margin-top: 8px;
            font-size: 14.75px;
            color: #f50000;
            font-family: Arial, Helvetica, sans-serif;
        }
        &[data-theme="dark"] {
            input {
                border-color: #474849;
                color: rgb(190, 190, 190);
            }
        }
        @media screen and (prefers-color-scheme: dark) {
            &[data-theme="system"] {
                input {
                    border-color: #474849;
                    color: rgb(190, 190, 190);
                }
            }
        }  
        input {
            width: calc(100% - 27px);
            font-size: 15px;
            margin: 0 0 0 0;
            background-color: transparent;
            outline: none;
            height: 30px;
            padding: 8px;
            padding-left: 12px;
            padding-right: 12px;
            border-width: 1px;
            border-style: solid;
            border-radius: 5px;
            border-color: #bdbdbd;   
             
            &:focus,
            &[data-has-error]:focus {
                outline: none;
                border-color: #2196f3;
                box-shadow: 0 0 1.5px 0.45px #2195f3;
            }
            &[data-has-error="true"] {
                box-shadow: 0 0 1.5px 0.45px red;
                border-color: rgb(230, 0, 0);
            }
        } 
    }
</style>