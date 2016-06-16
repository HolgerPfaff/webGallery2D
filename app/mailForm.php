<div class="container grey-text">
    <div class="row">
        <div class="col s12">
            <form id="mailForm">
                <div class="row">
                    <div class="col s12 m6 input-field">
                        <i class="material-icons prefix">mail</i>
                        <label for="inputSender">E-Mail</label>
                        <input id="inputSender" type="email" name="sender" class="validate" />                        
                    </div>
                    <div class="col s12 m6 input-field">
                        <i class="material-icons prefix">mail</i>
                        <label for="inputTitle">Betreff</label>
                        <input id="inputTitle" type="text" name="title" class="validate" />                        
                    </div>
                    <div class="col s12 m12 input-field">
                        <i class="material-icons prefix">message</i>
                        <label for="inputMessage">Nachricht</label>
                        <textarea name="inputMessage" class="materialize-textarea"></textarea>                        
                    </div>
                </div>
            </form>
        </div>
        <div class="col s12">
            <a id="mailButton" class="waves-effect waves-light btn">Mail senden</a>
        </div>
    </div>
</div>