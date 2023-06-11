import NavCom from "$lib/navbar/NavCom.svelte";
import NavStyled from "$lib/navbar/NavStyled.svelte";
import NavSuper from "$lib/navbar/NavSuper.svelte";
import { writable } from "svelte/store";

export const navbars = writable([
    {
        title: 'Simple Navbar',
        code: `<script>
        let title = 'CodeDev';
        let navs = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ];
    </script>
    
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        /></svg
                    >
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {#each navs as nav}
                        <li><a href={nav.link}>{nav.name}</a></li>
                    {/each}
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl" href="/">{title}</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                {#each navs as nav}
                    <li><a href={nav.link}>{nav.name}</a></li>
                {/each}
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn" href="/">Button</a>
        </div>
    </div>
    `,
        componenet: NavCom
    }, {
        title: 'Styled Navbar',
        componenet: NavStyled,
        code: `<script>
        let title = ' Floo';
        let navs = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ];
    </script>
    
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        /></svg
                    >
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-slate-800"
                >
                    {#each navs as nav}
                        <li><a href={nav.link} class="font-semibold text-slate-800" >{nav.name}</a></li>
                    {/each}
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl font-bold text-gray-900 hover:bg-yellow-300 border-2 border-slate-800 hover:border-slate-800 " href="/">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/40/40531.png?w=740&t=st=1686503511~exp=1686504111~hmac=7583e419f52a2d049d05a17708a447e5c50de971bf2098287ed1a342905a33fb"
                    class="w-[36px]"
                    alt=""
                />
                {title}</a
            >
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                {#each navs as nav}
                    <li>
                        <a href={nav.link} class="mx-1 capitalize btn-ghost hover:btn-warning text-slate-900 btn btn-sm hover:text-gray-900">{nav.name}</a>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn" href="/">Button</a>
        </div>
    </div>
    `
    },{
        title:'Navbar with No Btn',
        componenet: NavSuper,
        code:`<script>
        import { page } from '$app/stores';
        $: rid = $page.route.id;
        $: console.log(rid);
        let title = 'Flaze';
        let navs = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ];
    </script>
    
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        /></svg
                    >
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-slate-800"
                >
                    {#each navs as nav}
                        <li><a href={nav.link} class="font-semibold text-slate-800">{nav.name}</a></li>
                    {/each}
                </ul>
            </div>
            <a
                class="btn btn-ghost normal-case text-xl font-bold text-gray-900 hover:bg-yellow-300 border-2 border-slate-800 hover:border-slate-800"
                href="/"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/40/40531.png?w=740&t=st=1686503511~exp=1686504111~hmac=7583e419f52a2d049d05a17708a447e5c50de971bf2098287ed1a342905a33fb"
                    class="w-[36px]"
                    alt=""
                />
                {title}</a
            >
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                {#each navs as nav}
                    <li>
                        <a
                            href={nav.link}
                            class:active={rid === nav.link}
                            class="mx-1 capitalize btn-ghost hover:btn-warning text-slate-900 btn btn-sm hover:text-gray-900"
                            >{nav.name}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <style>
        .active{
            color: #00071c;
            background-color: #50c3f9;
        }
    </style>
    `
    }
])