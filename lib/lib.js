
class Lib{
  static show(id){
    document.getElementById(id).style.display = "inline";
  }

  static hide(id){
    document.getElementById(id).style.display = "none";
  }

  static getValue(id){
    return document.getElementById(id).value;
  }

  static setValue(id, val){
    document.getElementById(id).value = val;
  }
}
