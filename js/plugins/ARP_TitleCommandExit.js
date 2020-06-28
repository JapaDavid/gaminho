//=============================================================================// ARP_TitleCommandExit.js//=============================================================================
/*: 
* @plugindesc v1.00 Adds an option in the title screen to close 
* game window. * @author Atreyo Ray 
* 
* @param Command Exit 
* @desc The text that should appear as the exit command. 
* @default Quit 
* 
* @help Highly recommended to show the 'exit game' option ONLY when deploying to Windows   or Mac.   For Web or mobile applications, turn the plugin off. 
*/
(function () {
    var parameters = PluginManager.parameters('ARP_TitleCommandExit');
    var textExit = parameters['Command Exit'];
    var _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    
    Window_TitleCommand.prototype.makeCommandList = function () {
        _Window_TitleCommand_makeCommandList.call(this);
        this.addCommand(textExit, 'exitGame');
    };
   
    var _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
   
    Scene_Title.prototype.createCommandWindow = function () {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('exitGame', this.commandExitGame.bind(this));
    }; Scene_Title.prototype.commandExitGame = function () { this._commandWindow.close(); this.fadeOutAll(); SceneManager.exit(); };

})();