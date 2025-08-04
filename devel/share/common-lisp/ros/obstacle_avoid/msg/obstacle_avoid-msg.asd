
(cl:in-package :asdf)

(defsystem "obstacle_avoid-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "PersonBBox" :depends-on ("_package_PersonBBox"))
    (:file "_package_PersonBBox" :depends-on ("_package"))
  ))