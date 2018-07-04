<?php

namespace app\admin\widget;


use think\Controller;
use app\admin\model\NavMenuModel;

class Widgets extends Controller
{


    public function nav($name)
    {
        $model = new NavMenuModel();
        $data = $model->navMenusTreeArray();
        $this->assign('data',$data);
        return $this->fetch('head/index');
    }


}