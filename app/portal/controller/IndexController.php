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

class IndexController extends HomeBaseController
{
    public function index()
    {

        $result  = Db::name('slideItem')->where(['slide_id' => 1])->select()->toArray();
        $this->assign('slides',$result);
        $category =  $result  = Db::name('productCategory')->select()->toArray();
        $this->assign('category',$category);
        $this->assign('name','首页');
        return $this->fetch(':index');
    }

    public function proshow(){
        $id = $this->request->param('proid');
        $category =  $result  = Db::name('productCategory')->where(['id'=>$id])->select()->toArray();
        foreach ($category as $data) {
            $img =  \Qiniu\json_decode($data['more'],true)['thumbnail'];
            $htmlStr = '<div class="slick js-pro-slick"><div><a href="/" target="_blank"><div class="home-pro-item"><img src="/upload/'. $img.'"/></div></a></div></div><div class="home-pro-des js-home-pro-des"><div class="con js-con" style="display: block;"  ><a class="name overf" href="/" target="_blank">'.$data['description'].'</a><a class="more-btn" href="/" target="_blank">查看更多</a></div></div>';
        }
        echo $htmlStr;
    }
    public function pinpai(){
        
        return $this->fetch(':index');

    }
    //移动产品分类接口
    public function prowap(){
        $id = $this->request->param('proid');
        $category =  $result  = Db::name('productCategory')->where(['id'=>$id])->select()->toArray();
        foreach ($category as $data) {
            $img = '/upload/'. $data['waptp'];
            $htmlStr = '<div class="slick js-pro-slick">

                                <div>
                                            <a href="/" target="_blank">
                                                <div class="home-pro-item">
                                                    <img src="'.$img.'"/>
                                 
                                            </a>
                                        </div>                                  
                        </div>
                                
                                <div class="home-pro-des js-home-pro-des">

                                    <div class="con js-con" style="display: block;"  >
                                                <a class="name overf" href="/" target="_blank">'.$data['description'].'</a>
                                                <a class="more-btn" href="/" target="_blank">查看更多</a>
                                 </div>                                      
                        </div>';
        }
        echo $htmlStr;
    }
    

}
