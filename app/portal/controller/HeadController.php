<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;
use app\admin\model\NavMenuModel;
use think\Db;

class HeadController extends HomeBaseController
{
  public function index()
    {
        $model = new NavMenuModel();
        $data = $model->navMenusTreeArray();
        $this->assign('data',$data);
        $result  = Db::name('slideItem')->where(['slide_id' => 1])->select()->toArray();
        $this->assign('slides',$result);
        $category =  $result  = Db::name('portalCategory')->select()->toArray();
        $this->assign('category',$category);
        return $this->fetch();
    }

}
