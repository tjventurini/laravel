<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale())}}">

    <head>
        <meta charset="UTF-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >
        <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
        >

        <title>Maintenance App</title>

        <link
            href="{{ asset('css/app.css') }}"
            rel="stylesheet"
        >
    </head>

    <body>
        <div id="app">
            <main class="flex">
                <div class="w-1/5 p-4">
                    <header class="pt-4 pb-8">
                        <h1 class="text-lg font-bold">{{ config('app.name') }}</h1>
                    </header>
                    <aside>
                        @include('components.menu')
                    </aside>
                </div>
                <div class="primary flex-1 py-8">
                    <router-view></router-view>
                </div>
            </main>
        </div>

        <script src="/js/app.js"></script>
    </body>

</html>