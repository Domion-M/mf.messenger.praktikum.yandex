export const tpl = `
{{#with page}}
<main class="wrap-page text-center">
<div class="login-and-signin-form">
    <h3 class="login-and-signin-form__title">{{title}}</h3>
    <div>
        <form action="/" method="POST">
        <div class="input-container"></div>
            <div class="btn-container">
            </div>
        </form>
    </div>
</div>
</main>
{{/with}}`;