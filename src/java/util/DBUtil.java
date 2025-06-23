package util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {

    public static Connection getConnection() throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(
            "jdbc:mysql://root:vOwpAyrdGLDyvDzePSDAMdxJQtpaqkaG@crossover.proxy.rlwy.net:21641/railway", "root", "vOwpAyrdGLDyvDzePSDAMdxJQtpaqkaG");
    }
}
