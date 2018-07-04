<?php

namespace app\portal\widget;


use think\Controller;
use app\admin\model\NavMenuModel;

class NavWidget extends Controller
{

    public function index($name)
    {
        $model = new NavMenuModel();
        $data = $model->navMenusTreeArray();
        $this->assign('data',$data);
        $this->assign('name',$name);
        return $this->fetch('head/index');
    }
    public  function  wap($name){
        $model = new NavMenuModel();
        $data = $model->navMenusTreeArray();
        $this->assign('data',$data);
        $this->assign('name',$name);
        return $this->fetch('head/wap');

    }


}