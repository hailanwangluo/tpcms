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
use app\portal\service\PostService;
use think\Db;
class PpaiController extends HomeBaseController
{
    public function index()
    {
       
    $data=db('portalCategory')->select();

     //以前的   return '$this->fetch(':edit')';
         $data='我的';
         $this->assign('da',$data);
         return $this->fetch();//正确的
    }

}
