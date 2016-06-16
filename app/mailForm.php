<div class="container">
    <form id="mailForm">
        <label>Absender
            <input type="text" name="sender" required />
        </label>
        <br />
        <label>E-Mail Betreff
            <input type="text" name="title" required />
        </label>
        <br />
        <label>Nachricht
            <textarea name="message" rows="10" cols="30" required></textarea>
        </label>
    </form>
    <a id="mailButton" class="waves-effect waves-light btn">Mail senden</a>
</div>