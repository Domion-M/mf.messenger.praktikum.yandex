export const tpl = `
{{#with page}}
<main class="d-flex">
<div class="return-page">
</div>
<div class="wrap-page text-center">
    <div class="user-profile">
        <div class="user-profile__avatar">
            <div class="user-profile__data-profile">                
            </div>
            <h3>Test</h3>
        </div>
        <div>
            <form action="/" method="POST">
                <div class="user-profile__data-profile">
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Старый пороль</div>
                        <div class="chenge-data-user"><input type="password" value="sicretKey"
                                name="oldPassword">
                        </div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Новый пароль</div>
                        <div class="chenge-data-user">
                            <input type="password" value="sicretKey" name="newPassword"></div>
                    </div>
                    <div class="user-profile__data-profile__list">
                        <div class="name-data">Поаторить новый пароль</div>
                        <div class="chenge-data-user"><input type="password" value="sicretKey"
                                name="newPasswordToo"></div>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <div class="user-profile__action">
            </div>
        </div>
    </div>
</div>
</main>
{{/with}}`;
//# sourceMappingURL=template.js.map