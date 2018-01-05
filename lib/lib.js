
class Lib{
  static show(id){
    document.getElementById(id).style.display = "inline";
  }

  static hide(id){
    document.getElementById(id).style.display = "none";
  }

  static value(id){
    return document.getElementById(id).value;
  }

  static value(id, val){
    document.getElementById(id).value = val;
  }
}
