<?php

namespace Mageplaza\HelloWorld\Model;

use Magento\Framework\Model\AbstractModel;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart as ResourceTask;

class Cart extends AbstractModel
{
    protected function _construct()
    {
        $this->_init(ResourceTask::class);
    }
}
