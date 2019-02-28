-- 用户表
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
`id`             int(11)       NOT NULL AUTO_INCREMENT COMMENT '主键',
`nickname`       char(80)      NOT NULL DEFAULT ''     COMMENT '昵称',
`head_img`       varchar(255)  NOT NULL DEFAULT ''     COMMENT '头像',
`sex`            tinyint(1)    NOT NULL DEFAULT 0      COMMENT '性别,0-未知 1-男 2-女',
`province`       char(40)      NOT NULL DEFAULT ''     COMMENT '省份',
`city`           char(40)      NOT NULL DEFAULT ''     COMMENT '城市',
`country`        char(40)      NOT NULL DEFAULT ''     COMMENT '国家',
`mobile`         char(18)      NOT NULL DEFAULT ''     COMMENT '手机',
`email`          char(40)      NOT NULL DEFAULT ''     COMMENT '邮箱',
`password`       char(40)                              COMMENT '密码',
`other`          varchar(255)  NOT NULL DEFAULT ''     COMMENT '介绍',
`create_time`    int(10)       NOT NULL DEFAULT 0      COMMENT '写入时间',
`update_time`    int(10)       NOT NULL DEFAULT 0      COMMENT '更新时间',
`delete_time`    int(10)       NOT NULL DEFAULT 0      COMMENT '删除时间',
PRIMARY KEY (`id`),
UNIQUE KEY (`mobile`),
KEY (`create_time`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户表';
