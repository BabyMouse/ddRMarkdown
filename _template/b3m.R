xfun::pkg_load2("knitr","rmarkdown")

# ref: https://github.com/yihui/knitr/blob/master/R/engine.R
knitr::knit_engines$set(html = function(options) {
  knitr::engine_output(options,options$code, '')
})
source('source_embed.R')

after_body<-c("_includes/body_suffix.html")
rmarkdown::pandoc_include_args(after_body = after_body)

